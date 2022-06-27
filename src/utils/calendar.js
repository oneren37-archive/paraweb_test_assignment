/* global window */
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.js';
import 'jquery-ui-dist/jquery-ui.min.css';

export default function initCalendar(startSelector, endSelector) {
    $(() => {
        const dateFormat = 'mm/dd/yy';
        const from = $(startSelector)
            .datepicker({
                defaultDate: '+1w',
                changeMonth: true,
                numberOfMonths: 1,
            })
            .on('change', function () {
                // eslint-disable-next-line
                    to.datepicker('option', 'minDate', getDate(this));
                setTimeout(() => {
                    window.eventEmitter.emit('startDateChanged');
                }, 0);
            });
            // eslint-disable-next-line
            var to = $(endSelector)
            .datepicker({
                defaultDate: '+1w',
                changeMonth: true,
                numberOfMonths: 1,
            })
            .on('change', function () {
                // eslint-disable-next-line
                    from.datepicker('option', 'maxDate', getDate(this));
                setTimeout(() => {
                    window.eventEmitter.emit('endDateChanged');
                }, 0);
            });

        function getDate(element) {
            let date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });
}
