/* SUBDOMAIN VISIT COUNT *******************************************************
*******************************************************************************/

var subdomainVisits = function(cpdomains) {
    let table = {};

    var tableSort = function(sd, n) {
        table[sd] ? table[sd] += n : table[sd] = n;
        if (sd.includes('.')) tableSort(sd.split('.').slice(1).join('.'), n);
    }

    for (let domain of cpdomains) {
        let subdomain = domain.split(' ')[1];
        let num = parseInt(domain.split(' ')[0]);

        tableSort(subdomain, num);
    }

    let result = [];

    for (let key in table) result.push(`${table[key]} ${key}`);

    return result;
};
