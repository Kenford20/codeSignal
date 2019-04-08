// Given the angle measure, find its type. Here's how different angles are called:

// angles less than 90° are called "acute" angles;
// an angle equal to 90° is called a "right" angle;
// angles between 90° and 180° are called "obtuse" angles;
// an angle equal to 180° is called a "straight" angle.

function angleType(measure) {
    return measure === 180 ? 'straight'
         : measure < 90 ? 'acute'
         : measure > 90 ? 'obtuse'
         : 'right';
}

