import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CreateOrEditInvoicePopup from './CreateOrEditInvoicePopup/CreateOrEditInvoicePopup.jsx';
import SendInvoicePopup from './SendInvoicePopup/SendInvoicePopup.jsx';

export default class PopupContainer extends React.Component {
    render() {
        const activePopups = this.props.PopupContainerReducer.get('activePopups');

        return (
            <div>
                {activePopups.get('createOrEditInvoicePopup')
                    ? <CreateOrEditInvoicePopup CreateOrEditInvoicePopupReducer={this.props.CreateOrEditInvoicePopupReducer}/>
                    : null
                }
                {activePopups.get('sendInvoicePopup')
                    ? <SendInvoicePopup SendInvoicePopupReducer={this.props.SendInvoicePopupReducer}/>
                    : null
                }
            </div>
        );
    }
}

PopupContainer.displayName = 'PopupContainer';

PopupContainer.propTypes = {
    CreateOrEditInvoicePopupReducer: ImmutablePropTypes.map.isRequired,
    PopupContainerReducer: ImmutablePropTypes.mapContains({
        activePopups: ImmutablePropTypes.mapContains({
            createOrEditInvoicePopup: PropTypes.bool.isRequired
        }).isRequired
    }).isRequired,
    SendInvoicePopupReducer: ImmutablePropTypes.map.isRequired
};

function mapStateToProps(state) {
    return {
        CreateOrEditInvoicePopupReducer: state.get('CreateOrEditInvoicePopupReducer'),
        SendInvoicePopupReducer: state.get('SendInvoicePopupReducer')
    };
}

export default connect(mapStateToProps)(PopupContainer);
