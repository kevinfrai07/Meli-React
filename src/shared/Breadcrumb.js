import React from "react";

function Breadcrumb({ categories }) {
    return (
        <ol className="breadcrumb text-muted categorias">
            <span >
                <span >
                    {
                        categories === null ? "" :

                            (Array.isArray(categories)
                                ?
                                    categories[0].values[0].path_from_root.map(category =>
                                        <li key={category.id}>
                                            {category.name}
                                        </li>
                                    )
                                :
                                <li key={categories.id}>
                                    {categories.name}
                                </li>
                            )
                    }
                </span>
            </span>
        </ol>
    )
}
export default Breadcrumb;