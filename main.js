

    let tBody = document.getElementById('tBody');
    // tBody.appendChild( tdFun(data));


    // fetch api
    fetch('https://api.escuelajs.co/api/v1/users')
    .then(res => res.json())
    .then(json=> {
        json.map(data =>{
            console.log(data);
            tBody.appendChild( tdFun(data));
        })
    })


    // create table data
    function tdFun({image, name, email, password, role}){
        let tr = document.createElement('tr');
    tr.innerHTML =` 
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex item-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img ${image} class="w-10 h-10 rounded-full" alt="">
                        </div>

                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                                ${name}
                            </div>
                            <div class="text-sm text-gray-500 ">
                                ${email}
                            </div>
                        </div>
                    </div>
                    </td>


                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                   ${password}
                </span>
                </td>


                <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm text-gray-500">
                    ${role}
                </span>
                </td>`;

                return tr;
}