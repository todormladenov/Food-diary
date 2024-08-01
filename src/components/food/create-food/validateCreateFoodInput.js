export const validateCreateFoodInput = (values) => {
    const { protein, name, calories, carbs, fat, servingSize } = values;

    const errors = {};

    if (!protein || protein < 0) {
        errors.protein = 'Protein must be a positive number';
    }

    if (!name.trim()) {
        errors.name = 'Food name is required';
    }

    if (!calories || calories < 0) {
        errors.calories = 'Calories must be a positive number';
    }

    if (!carbs || carbs < 0) {
        errors.carbs = 'Carbs must be a positive number';
    }

    if (!fat || fat < 0) {
        errors.fat = 'Fat must be a positive number';
    }

    if (!servingSize.trim()) {
        errors.servingSize = 'Serving Size is required';
    }

    if (Object.keys(errors).length > 0) {
        return errors
    }

    return null;
}