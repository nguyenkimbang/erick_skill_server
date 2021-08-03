import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default (product, actions) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.product_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${product.list_price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Model Year: {product.model_year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => actions.deleteProduct(product.product_id)}>
          Delete
        </Button>
        <Button size="small" color="primary">
          ADD TO CART - fire action as normal dev
        </Button>
      </CardActions>
    </Card>
  );
}