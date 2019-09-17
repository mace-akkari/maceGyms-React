import React from "react";

export const Page = (props) => {
    const { title, children } = props;
    return (
        <div className="page">
            <h2>{title}</h2>
            <div class="content">
                { children }
            </div>
        </div>
    )
}