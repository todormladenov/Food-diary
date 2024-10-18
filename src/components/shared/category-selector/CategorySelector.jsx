import './CategorySelector.css';
import { useState } from "react";

export default function CategorySelector({ onChange, value }) {
    const [selectedCategory, setSelectedCategory] = useState(value);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        if (!category) {
            return
        }
        onChange(e);
    }

    return (
        <>
            <label className="category-selector-label">Food Category</label>
            <select
                className="category-selector"
                name="category"
                value={value = !undefined ? value : selectedCategory}
                onChange={handleCategoryChange}
            >

                <option value="">Choose a category</option>
                <option value="Солени пакетирани храни ">Salty packaged foods</option>
                <option value="Яйца">Eggs</option>
                <option value="Алкохолни напитки">Alcoholic beverages</option>
                <option value="Безалкохолни напитки">Soft drinks</option>
                <option value="Бобови">Legumes (grains)</option>
                <option value="Веган">Vegan</option>
                <option value="Въглехидрати">Carbohydrates</option>
                <option value="Готвени ястия (домашна храна/ресторант/закусвалня)">Cooked meals (home cooked food/restaurant/diner)</option>
                <option value="Десерти">Desserts</option>
                <option value="Животинска карантия (месо)">Animal offal (meat)</option>
                <option value="Закуски">Breakfast meals</option>
                <option value="Замразени храни">Frozen foods</option>
                <option value="Зеленчуци">Vegetables</option>
                <option value="Мед/сладка/конфитюри">Honey/sweet/jams</option>
                <option value="Месо">Meat</option>
                <option value="Млечни">Dairy</option>
                <option value="Олиа/масла">Oils/butters</option>
                <option value="Плодове">Fruits</option>
                <option value="Подправки">Spices</option>
                <option value="Протеин на прах">Protein powder</option>
                <option value="Протеинови барове">Protein bars</option>
                <option value="Растителни алтернативи на млечни продукти">Plant-based alternatives to dairy products</option>
                <option value="Риба">Fish</option>
                <option value="Сладки пакетирани храни">Sweet packaged foods</option>
                <option value="Сосове">Sauces</option>
                <option value="Супи">Soups</option>
                <option value="Сушени плодове">Dried fruits</option>
                <option value="Ядки/семена">Nuts/seeds</option>
                <option value="Ядкови масла">Nut butter</option>
                <option value="Fast food">Fast food</option>
                <option value="Shape Up Kitchen рецепти">Shape Up Kitchen recipes</option>
                <option value="Други">Others</option>
            </select>
        </>
    );
}