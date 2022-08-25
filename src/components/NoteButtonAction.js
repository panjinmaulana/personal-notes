import React from "react";

function NoteButtonAction({ className, displayName, id, actionName, isArchived }) {
    return (
        <button type="button"
            className={className}
            onClick={() => actionName(id, isArchived)}
        >
            {displayName}
        </button>
    );
};

export default NoteButtonAction;