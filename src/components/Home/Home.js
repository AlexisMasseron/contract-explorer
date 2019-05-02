import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Panel from "./Panel";

const styles = theme => ({
    home: {
        textAlign: "center"
    }
});

const component = ({ classes, handleAddress, updateAddress }) => (
    <div className={classes.home}>
        <Panel handleAddress={handleAddress} updateAddress={updateAddress} />
    </div>
);

component.propTypes = {
    classes: PropTypes.object.isRequired,
    handleAddress: PropTypes.func.isRequired,
    updateAddress: PropTypes.func.isRequired
};

export default withStyles(styles)(component);
