import {sell} from './schema.js'

const updateTimer = async (itemId, initialHour, initialMinute) => {
    let currentHour = initialHour;
    let currentMinute = initialMinute;

    const updateInterval = setInterval(async () => {
        try {
            const item = await sell.findById(itemId);

            if (!item) {
                clearInterval(updateInterval);
                return;
            }

            currentMinute -= 1;

            if (currentMinute <= 0 && currentHour !==0) {
                currentHour -= 1;
                currentMinute = 59;
            }

            await sell.findByIdAndUpdate(itemId, { 'time.hour': currentHour, 'time.minutes': currentMinute });

            if (currentHour <= 0 && currentMinute <= 0) {
                clearInterval(updateInterval);
            }
        } catch (error) {
            console.error('Error updating timer:', error);
            clearInterval(updateInterval);
        }
    }, 60000);

};

export { updateTimer };
