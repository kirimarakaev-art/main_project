// Иконка (Bootstrap Icons) и цвет карточки для каждой темы по её nick
var styles = {
    history:    { icon: 'bi-clock-history',     color: 'fuchsia' },
    goroutines: { icon: 'bi-lightning-charge',  color: 'blue' },
    channels:   { icon: 'bi-arrow-left-right',  color: 'aqua' },
    install:    { icon: 'bi-download',          color: 'yellow' }
};

var fallback = { icon: 'bi-journal-code', color: 'blue' };

module.exports = function(nick) {
    return styles[nick] || fallback;
};
