import ReactDOM from 'react-dom';
import Popup from 'Components/Popup';
import React, { useCallback } from 'react';
import * as actions from 'Actions/actions';
import { formattedPopupsData } from './selectors';
import * as contents from 'Components/PopupContents';
import { useDispatch, useSelector } from 'react-redux';

const PopupManager = () => {
    const dispatch = useDispatch();
    const popup = useSelector(formattedPopupsData);

    const handleOnClose = useCallback(() => dispatch(actions.closePopup()), [])

    return ReactDOM.createPortal(
        <Popup
            isOpen={popup.isOpen}
            onClose={handleOnClose}
        >
            {
                popup.contents && popup.contents.map(item =>
                    contents[item.name]({
                        key: item.name,
                        props: {
                            ...item.props,
                            ...item.props?.btnonclick && {
                               btnonclick: () =>
                                 dispatch(actions[item.props.btnonclick.actionName](item.props.btnonclick.props))
                            }
                        }
                    })
                )
            }
        </Popup>
        , document.getElementById('popup')
    )
};

export default PopupManager;
