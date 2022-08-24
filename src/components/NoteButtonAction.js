import React from "react";

function NoteButtonAction({className, actionName}) {
    return (
        <button type="button" className={className}>{actionName}</button>
    );
};

export default NoteButtonAction;