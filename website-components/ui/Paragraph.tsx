import React from "react";

function Paragraph({ content = 'Welcome' }: { content: string }) {
    return (
        <p className="text-slate-400 mb-6 text-justify" data-aos="fade-up">{content}</p>
    )
}

export default Paragraph;