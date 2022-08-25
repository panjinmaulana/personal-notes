import React from "react";

function NoteSearch({ onSearch }) {
    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Cari catatan ..."
                autoFocus
                autoComplete="off"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default NoteSearch;