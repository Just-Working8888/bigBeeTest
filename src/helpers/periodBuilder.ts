import { PeriodSelectTypes } from '../store/slices/currentPeriodSlice';
import dayjs from 'dayjs';

export const getPeriod = (variant: PeriodSelectTypes, period?: [string, string] | [string, string, string]): [string, string, string] => {
    switch (variant) {
        case 'hour': return [dayjs().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss'), dayjs().format('YYYY-MM-DD HH:mm:ss'), 'hour']
        case 'day': return [dayjs().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'), dayjs().format('YYYY-MM-DD HH:mm:ss'), 'day']
        case 'week': return [dayjs().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss'), dayjs().format('YYYY-MM-DD HH:mm:ss'), 'week']
        case 'month': return [dayjs().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss'), dayjs().format('YYYY-MM-DD HH:mm:ss'), 'month']
        case 'year': return [dayjs().subtract(1, 'years').format('YYYY-MM-DD HH:mm:ss'), dayjs().format('YYYY-MM-DD HH:mm:ss'), 'year']
        case 'period': return [dayjs(period![0]).format('YYYY-MM-DD HH:mm:ss'), `${dayjs(period![1]).format('YYYY-MM-DD')} 23:59:59`, 'period']
        case 'today': return [`${dayjs().format('YYYY-MM-DD')} 00:00:00`, dayjs().format('YYYY-MM-DD HH:mm:ss'), 'today']
    }
}
