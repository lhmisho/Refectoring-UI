import React from 'react'

const Table = () => {
    return (
        <div class="mb-6">
            <div class="container mx-auto px-4 lg:rounded-lg">
                <table class="table-auto bg-white w-full shadow-2xl lg:rounded-lg">
                    <thead class="bg-gray-200 text-gray-700 text-sm">
                        <tr>
                            <th class="border px-4 py-2">Name</th>
                            <th class="border px-4 py-2">QUANTITY</th>
                            <th class="border px-4 py-2">PRICE</th>
                            <th class="border px-4 py-2">AVG COST</th>
                            <th class="border px-4 py-2">BUY/SELL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">Intro to CSS</td>
                            <td class="border px-4 py-2">Adam</td>
                            <td class="border px-4 py-2">858</td>
                            <td class="border px-4 py-2">$23</td>
                            <td class="border px-4 py-2">$23</td>
                        </tr>
                        <tr class="">
                            <td class="border px-4 py-2">Hossen Misho</td>
                            <td class="border px-4 py-2">Adam</td>
                            <td class="border px-4 py-2">112</td>
                            <td class="border px-4 py-2">$23</td>
                            <td class="border px-4 py-2">$23</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Into to JavaScript</td>
                            <td class="border px-4 py-2">Chris</td>
                            <td class="border px-4 py-2">1,280</td>
                            <td class="border px-4 py-2">$23</td>
                            <td class="border px-4 py-2">$23</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table