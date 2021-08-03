import {Router} from 'express';
import models from '../database/models';
const Sequelize = require('sequelize');
import moment from 'moment';

const router = Router();

const Op = Sequelize.Op;

router.post('/phuc_hai_bang', async (req, res) => {
    const [results] = await models.Sequelize.query(req.body.sql);
    res.json(results);
});

router.post('/any_url', async (req, res) => {
    res.json('refer services/orderServices.js for ORM using');
});

router.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id || ''
        console.log('id', id)
        const attributes = [
            ['product_id', 'id'],
            'product_name',
            'model_year',
            'list_price',
            Sequelize.col('category.category_name'),
            Sequelize.col('brand.brand_name')
        ]
        const product = await models.products.findByPk(id, {
            attributes,
            raw: true,
            include: [
                {
                    model: models.categories,
                    as: 'category',
                    attributes: [],
                    required: false
                },
                {
                    model: models.brands,
                    as: 'brand',
                    attributes: [],
                    required: false
                }
            ],
        });
 
        const stocks = await models.stocks.findAll({
            attributes: [
                Sequelize.col('store.store_name'),
                'quantity'
            ],
            raw: true,
            where: {    
                product_id: product.id,      
            },
            include: [
                {
                    model: models.stores,
                    as: 'store',
                    attributes: [],
                    required: false
                }
            ]
        });
 
        return res.status(200).json({
            ...product,
            stocks
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/products', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const searchKey = req.query.searchKey || ''
        
        const attributes = [
            ['product_id', 'id'],
            'product_name',
            'model_year',
            'list_price',
            Sequelize.col('category.category_name'),
            Sequelize.col('brand.brand_name')
        ]
        const products = await models.products.findAndCountAll({
            offset: (page - 1) * limit, 
            limit,
            where: {
                product_name: {
                    [Op.like]: `%${searchKey}%`
                }
            },
            attributes,
            raw: true,
            include: [
                {
                    model: models.categories,
                    as: 'category',
                    attributes: [],
                    required: false
                },
                {
                    model: models.brands,
                    as: 'brand',
                    attributes: [],
                    required: false
                }
            ],
        });
        return res.status(200).json({
            totalItem: products.count,
            data: products.rows,
            currentPage: page,
            perPage: limit
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get('/user/:id/role/:role/get-info', async (req, res) => {
    try {
        const id = req.params.id
        const role = req.params.role
 
        const customerAttrs = [
            ['customer_id', 'id'],
            ['first_name', 'firstName'],
            ['last_name', 'lastName'],
            'email',
            'phone',
        ]
        const staffAttrs = [
            ['staff_id', 'id'],
            ['first_name', 'firstName'],
            ['last_name', 'lastName'],
            'email',
            'phone',
        ]
        
        let profile = ''
        if (role === 'staff') {
            profile = await models.staffs.findByPk(id, {attributes: staffAttrs})
        }
        if (role === 'customer') { 
            profile = await models.customers.findByPk(id, {attributes: customerAttrs})
        }
        return res.status(200).json({
            ...profile.dataValues,
            role
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post('/order', async (req, res) => {
    try {
        const { itemList, customerId } = req.body
    
        const listRequiredDay = []
        for (let i = 0; i < itemList.length; i++) {
            if (listRequiredDay.indexOf(itemList[i].required_date) < 0) {
                listRequiredDay.push(itemList[i].required_date)
            }
        }
 
        for (let i = 0; i < listRequiredDay.length; i++) {
            const order = await models.orders.create({
                customer_id: customerId,
                order_status: 4,
                order_date: moment().toDate(),
                required_date: moment(listRequiredDay[i], 'DD MMM YYYY').toDate(),
                shipped_date: moment(listRequiredDay[i], 'DD MMM YYYY').toDate(),
                store_id: 1,
                staff_id: 1
            });
            // const listItemByDate = itemList.filter(item => item.required_date === listRequiredDay[i])
            // console.log('-----order----', order)
            // for (let j = 0; j < listItemByDate.length; j++) {
            //     const orderItem = await models.order_items.create({
            //         item_id: 1,
            //         order_id: order.order_id,
            //         product_id: listItemByDate[j].id,
            //         quantity: parseInt(listItemByDate[j].quantity),
            //         list_price: parseFloat(listItemByDate[j].in_money),
            //         discount: 0
            //     })
            // }
        }
        return res.status(200).json({
            status: 'success'
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
        return res.status(200).json({
            status: 'success'
        });
});

export default router;
