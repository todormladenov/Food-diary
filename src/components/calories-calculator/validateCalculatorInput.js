export const validateCalculatorInput = (values) => {
    const { weight, height, age, activity, goal } = values;

    const errors = {};

    const activityMultipliers = {
        little: 1.2,
        lite: 1.375,
        moderate: 1.55,
        active: 1.725
    };

    const goalAdjustments = {
        maintain: 0,
        loss: -500,
        gain: 300
    };

    if (!weight || weight <= 0 || isNaN(weight)) {
        errors.weight = 'Weight must be a positive number';
    }
    if (!height || height <= 0 || isNaN(height)) {
        errors.height = 'Height must be a positive number';
    }
    if (!age || age <= 0 || isNaN(age)) {
        errors.age = 'Age must be a positive number';
    }

    if (!activityMultipliers[activity]) {
        errors.activity = 'Invalid activity';
    }

    if (goalAdjustments[goal] === undefined) {
        errors.goal = 'Invalid goal';
    }

    if (Object.keys(errors).length > 0) {
        return errors;
    }

    return null;
}