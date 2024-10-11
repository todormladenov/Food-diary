import './CategorySelector.css';
import { useState } from "react";

export default function CategorySelector({ onSearch }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = async (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        if (!category) {
            return
        }
        onSearch(category)
    }

    return (
        <>
            <label className="category-selector-label">Food Category</label>
            <select
                className="category-selector"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
            >

                <option value="">Избери категория</option>
                <option value="Солени пакетирани храни ">Солени пакетирени храни</option>
                <option value="Яйца">Яйца</option>
                <option value="Алкохолни напитки">Алкохолни напитки</option>
                <option value="Безалкохолни напитки">Безалкохолни напитки</option>
                <option value="Бобови">Бобови</option>
                <option value="Веган">Веган</option>
                <option value="Въглехидрати">Въглехидрати</option>
                <option value="Готвени ястия (домашна храна/ресторант/закусвалня)">Готвени ястия (домашна храна/ресторант/закусвалня)</option>
                <option value="Десерти">Десерти</option>
                <option value="Животинска карантия (месо)">Животинска карантия (месо)</option>
                <option value="Закуски">Закуски</option>
                <option value="Замразени храни">Замразени храни</option>
                <option value="Зеленчуци">Зеленчуци</option>
                <option value="Мед/сладка/конфитюри">Мед/сладка/конфитюри</option>
                <option value="Месо">Месо</option>
                <option value="Млечни">Млечни</option>
                <option value="Олиа/масла">Олиа/масла</option>
                <option value="Плодове">Плодове</option>
                <option value="Подправки">Подправки</option>
                <option value="Протеин на прах">Протеин на прах</option>
                <option value="Протеинови барове">Протеинови барове</option>
                <option value="Растителни алтернативи на млечни продукти">Растителни алтернативи на млечни продукти</option>
                <option value="Риба">Риба</option>
                <option value="Сладки пакетирани храни">Сладки пакетирани храни</option>
                <option value="Сосове">Сосове</option>
                <option value="Супи">Супи</option>
                <option value="Сушени плодове">Сушени плодове</option>
                <option value="Ядки/семена">Ядки/семена</option>
                <option value="Ядкови масла">Ядкови масла</option>
                <option value="Fast food">Fast food</option>
                <option value="Shape Up Kitchen рецепти">Shape Up Kitchen рецепти</option>
                <option value="Други">Други</option>
            </select>
        </>
    );
}