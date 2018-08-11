import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingrendient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingrendient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingrendient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                        <div></div>
                    </div>
                );
                break;
            case ('meat'):
                ingrendient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingrendient = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingrendient = <div className={classes.Bacon}></div>
                break;
            case ('salas'):
                ingrendient = <div className={classes.Salad}></div>
                break;
            default:
                ingrendient = null;
        }

        return ingrendient;

    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredient;