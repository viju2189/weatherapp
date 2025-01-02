import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TimeLocation = () => {
    const weather = useSelector((state: RootState) => state.weather.weather);

    return (
        <div className='flex flex-col items-center'>
            {/* <div className='flex items-center justify-center my-6'>
                <p className='text-xl font-extralight'>Tuesday, 14 May 2024 | Local Time: 07:21 AM</p>
            </div>
            <div className="flex items-center my-3 justify-normal">
                <p className='text-3xl font-medium'>Barlin, DE</p>
            </div> */}
        </div>
    );
};

export default TimeLocation;
