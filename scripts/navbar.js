const englishToPersian = s => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

const formatPhoneNumber = p => `۰${englishToPersian(p).slice(3)}`;

const deactivate = (logo, container) => {
    logo.classList.add('deactivate');
    logo.classList.remove('activate');
    container.style.display = 'none';
}

const activate = (logo, container) => {
    logo.classList.add('activate');
    logo.classList.remove('deactivate');
    container.style.display = 'block';
}

const changeContainer = (index) => {
    for (let i = 0; i < 4; i++) {
        (i === index)?activate(navbarLogos[i], containers[i]):deactivate(navbarLogos[i], containers[i]);
    }
}

const addCardToContainer = (cardInfo, container) => {
    let cardBody = document.createElement('div');
    cardBody.classList.add('card');
    cardBody.innerHTML = `
                <div class="card-row">
                    <p>نام و نام خانوادگی:</p>
                    <p>${cardInfo.name}</p>
                </div>
                <div class="card-row">
                    <p>شماره موبایل:</p>
                    <p class="blue">${formatPhoneNumber(cardInfo.phoneNumber)}</p>
                </div>
                <div class="card-row">
                    <p>تاریخ دعوت کرده:</p>
                    <p>${englishToPersian(cardInfo.invitedAt.toString())}</p>
                </div>
                <div class="card-row">
                    <p>مهلت تا تایید شدن:</p>
                    <p class="${(cardInfo.daysToActivation === 0)?"red":""}">${englishToPersian(cardInfo.daysToActivation.toString())} روز</p>
                </div>
                <div class="card-row">
                    <p>تعداد سفر‌ها:</p>
                    <p>${englishToPersian(cardInfo.totalRidesCount.toString())}/${englishToPersian(cardInfo.ridesCount.toString())} سفر</p>
                </div>`;
    container.appendChild(cardBody);
}

let navbarLogos = [
    document.getElementById('invited-container'),
    document.getElementById('pending-container'),
    document.getElementById('approved-container'),
    document.getElementById('activated-container')
], containers = [
    document.getElementById('invited-container-body'),
    document.getElementById('pending-container-body'),
    document.getElementById('approved-container-body'),
    document.getElementById('activated-container-body')
],referees = [{
    name: 'محمد محمدی',
    phoneNumber: '+989123456789',
    invitedAt: 2341231,
    daysToActivation: 0,
    ridesCount: 2,
    totalRidesCount: 3,
    activedAt: 2341231
}, {
    name: 'اشکان عاشوری',
    phoneNumber: '+989122222222',
    invitedAt: 2341231,
    daysToActivation: 3,
    ridesCount: 2,
    totalRidesCount: 3,
    activedAt: 2341231
}];


changeContainer(0);

containers.forEach(container => {
    referees.forEach(referee => {
        addCardToContainer(referee, container);
    });
});




