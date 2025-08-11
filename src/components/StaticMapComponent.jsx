import React from 'react';

const StaticMapComponent = () => {
    return (
        <div>
            <iframe
                title="Embedded Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.559046381295!2d7.453543815804371!3d9.091535060191038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a68024c0ac5%3A0x631ccc256a8efdf4!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1754921366385!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default StaticMapComponent;