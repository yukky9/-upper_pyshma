import React from 'react';

const GeneralCards = () => {
    const data = [
        {id: 1, name: 'Flowbite', date: '2021/25/09', coordinates: '269000', completeness: '49%'},
        {id: 2, name: 'React', date: '2013/24/05', coordinates: '4500000', completeness: '24%'},
        {id: 3, name: 'Angular', date: '2010/20/09', coordinates: '2800000', completeness: '17%'},
        {id: 4, name: 'Vue', date: '2014/12/02', coordinates: '3600000', completeness: '30%'},
        {id: 5, name: 'Svelte', date: '2016/26/11', coordinates: '1200000', completeness: '57%'},
        {id: 6, name: 'Ember', date: '2011/08/12', coordinates: '500000', completeness: '44%'},
    ];

    const handleClick = (name: string) => {
        window.location.href = `/object/${name}`;
    };

    return (
        <div className="m-28">
            <div className="grid mx-auto border shadow-2xl rounded-xl p-10">
                <table className="w-full text-left">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">
                            <span className="flex items-center">
                                Название
                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                </svg>
                            </span>
                        </th>
                        <th className="p-2" data-type="date" data-format="YYYY/DD/MM">
                            <span className="flex items-center">
                                Дата
                                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                </svg>
                            </span>
                        </th>
                        <th className="p-2">Координаты</th>
                        <th className="p-2">Завершенность</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr key={item.id} className="hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleClick(item.name)}>
                            <td className="font-medium text-gray-900 whitespace-nowrap p-2">{item.name}</td>
                            <td className="p-2">{item.date}</td>
                            <td className="p-2">{item.coordinates}</td>
                            <td className="p-2">{item.completeness}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GeneralCards;
