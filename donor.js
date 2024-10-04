document.addEventListener("DOMContentLoaded", () => {
    const donors = [
        { srNo: 1, name: "ક્રિષ્ના કન્સ્ટ્રક્શન", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 2, name: "શ્રીરામ ભરોસે", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 3, name: "વનરામભાઈ આશારામભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 4, name: "મહાદેવભાઈ પ્રભુરામભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 5, name: "ભગવાનભાઈ શિવરામભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 6, name: "જગદીશભાઈ પ્રેમદાસભાઈ સાધુ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 501 },
        { srNo: 7, name: "તખતરામભાઈ કરણાભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 8, name: "કરશનભાઈ શિવરામભાઈ લાફા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 9, name: "પટેલ નરશીભાઈ રૂપાજી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 10, name: "હિતેશભાઈ ગણપતભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 11, name: "દાનાભાઈ ધનરાજભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 12, name: "દયારામભાઈ શિવરામભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 13, name: "વિક્રમભાઈ કરશનભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 14, name: "લાલજીભાઈ નાગજીભાઈ પ્રજાપતિ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 15, name: "રણછોડભાઈ કાળાભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 16, name: "કેશરામભાઈ વાલજીભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 17, name: "કેશરામભાઈ જયરામભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 18, name: "હિતેશભાઈ ગણપતભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1111 },
        { srNo: 19, name: "સુખદેવભાઈ શિવરામભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1111 },
        { srNo: 20, name: "જય ગોગા પશુ આહાર, ખોરડા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 21, name: "પટેલ દલાજી અમરાજી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 22, name: "સાધુ દામોદરદાસ ઈશ્વરદાસ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 23, name: "વિક્રમભાઈ શંકરભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 24, name: "મનુભાઈ તેજરામભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 25, name: "વનરામભાઈ ધુડાભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 26, name: "સુથાર પાર્વતીબેન લખમણભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 27, name: "પરશોતમભાઈ ઉદેરામભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 28, name: "વિષ્ણુભાઈ પરશોતમભાઈ ડિઘારી", purpose: "શ્રાવણમાસ વ્રત પૂર્ણ થયા નિમિત્તે", amount: 500 },
        { srNo: 29, name: "નાનજીભાઈ સદાભાઈ પટેલ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 30, name: "વિરમજી કાશીરામ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 31, name: "શ્રીરામભાઈ હેમતરામભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 32, name: "રમેશભાઈ કાળાભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 33, name: "સ્વ. પ્રભુરામભાઈ ચતરસીંગભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 2100 },
        { srNo: 34, name: "ગોવર્ધનભાઈ લખમણભાઈ મોદી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 35, name: "મધુભાઈ હરશેંગભાઈ કોદરવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 36, name: "જમકુબેન ઉદેરામભાઈ કોદરવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 37, name: "વિપુલભાઈ ભીખાભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 38, name: "હેમજીભાઈ ભેમાભાઈ નાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 39, name: "દિઘારી રમેશભાઈ કરશનભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 40, name: "પટેલ દલાજી સોનાજી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 41, name: "ઈશ્વરભાઈ હેમજીભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 42, name: "પ્રવિણભાઈ વાલજીભાઈ પ્રજાપતિ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 43, name: "જીવરામભાઈ મૂળજીભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 44, name: "વનારામભાઈ આશારામભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1111 },
        { srNo: 45, name: "જગદીશભાઈ શંકરભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 46, name: "જગદીશભાઈ દેવજીભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 47, name: "પ્રજાપતિ વખતાભાઈ રામજીભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 48, name: "પ્રજાપતિ અંબારામભાઈ દેવજીભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 49, name: "મોદી કાંતિભાઈ લખમણભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 50, name: "પ્રવિણભાઈ અમરાભાઈ, ચાલા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 51, name: "લક્ષ્મણભાઈ શ્રીરામભાઈ ખોરડીયા", purpose: "જન્મદિવસ નિમિત્તે", amount: 1100 },
        { srNo: 52, name: "આનંદ હોસ્પિટલ, થરાદ", purpose: "જન્મદિવસ નિમિત્તે (જોશી કિયાબેન)", amount: 1100 },
        { srNo: 53, name: "માજીરાણા ધીરાભાઈ રામાભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 54, name: "હેમતરામભાઇ પ્રભુરામભાઇ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 55, name: "ગણપતભાઈ કાળાભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 56, name: "હિરણભાઈ બળદેવભાઈ જોષી, ભરડવા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500},
        { srNo: 57, name: "આનંદ પ્રકાશ જ્વેલર્સ, થરાદ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 58, name: "ભરતભાઈ ભગવાનભાઈ ડિઘારી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 8900 },
        { srNo: 59, name: "મગાભાઈ પરખાભાઈ પટેલ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 60, name: "લાલાભાઈ ભુદરાભાઈ પટેલ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 61, name: "સુથાર સરસ્વતીબેન પચાણભાઈ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 62, name: "શંકરભાઈ ભેમજીભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 63, name: "દાનાભાઈ કુવરાભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 64, name: "જોષી મગનભાઈ અભેરામભાઈ, મહાજનપુરા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 65, name: "પટેલ નરશેંગભાઈ સવાજી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 66, name: "પ્રજાપતિ નરેશભાઈ સવાજી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 67, name: "રતનશીભાઈ દેવરામભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 68, name: "પટેલ ગોકળાજી દરઘાજી", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 69, name: "અરજણભાઈ મોહનભાઈ બારોટ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 70, name: "આશલ રાજારામભાઈ લાખીરામ, ડાભલીયાવાસ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 71, name: "શ્રીરામ ભરોસે", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 700 },
        { srNo: 72, name: "સુખદેવભાઈ વાલજીભાઈ ખોરડીયા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 73, name: "શ્રીરામ ભરોસે", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 74, name: "નાનજીભાઈ રામચંદભાઈ દુગ્રાસણા", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 1100 },
        { srNo: 75, name: "જેમલભાઈ જીવરામભાઈ નાનીવાળ", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
        { srNo: 76, name: "શ્રીરામ ભરોસે", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 2500 },
        { srNo: 77, name: "શ્રીરામ ભરોસે", purpose: "સોમવતી અમાવશ્યા નિમિત્તે", amount: 500 },
    ];

    const tableBody = document.getElementById("donorTable");

    donors.forEach(donor => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${donor.srNo}</td>
            <td>${donor.name}</td>
            <td>${donor.purpose}</td>
            <td>₹${donor.amount.toLocaleString()}</td>
        `;

        tableBody.appendChild(row);
    });

    // Trigger the animations after the rows are added
    setTimeout(() => {
        document.querySelectorAll('td').forEach(td => {
            td.style.opacity = '1';
        });
    }, 100);
    document.getElementById('menu-icon').addEventListener('click', function() {
        var menuList = document.getElementById("menu-list");
        menuList.classList.toggle("open");
    });
});
function openNewPageHome() {
    // Specify the path to the new HTML file you want to open
    window.location.href = "abt.html";
}

