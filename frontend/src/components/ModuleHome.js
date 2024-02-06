import React from 'react';
import { Link } from "react-router-dom";
function ModuleHome() {
    return (
        <div>
            <ol>
                <li><Link to="/module1">Module 1</Link></li>
                <li><Link to="/module2">Module 2</Link></li>
                <li><Link to="/module3">Module 3</Link></li>
                <li><Link to="/module4">Module 4</Link></li>
            </ol>
        </div>
    );
}

export default ModuleHome;