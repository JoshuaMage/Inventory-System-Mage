<script>
    // Sample data and columns
    let data = [
      { name: 'John Doe', age: 28, email: 'john@example.com' },
      { name: 'Jane Smith', age: 32, email: 'jane@example.com' },
      { name: 'Michael Johnson', age: 45, email: 'michael@example.com' },
      { name: 'Emily Davis', age: 22, email: 'emily@example.com' },
      { name: 'Chris Lee', age: 30, email: 'chris@example.com' },
      { name: 'Katie Brown', age: 29, email: 'katie@example.com' },
      { name: 'Sarah Wilson', age: 35, email: 'sarah@example.com' },
      { name: 'David White', age: 40, email: 'david@example.com' },
      { name: 'Laura Green', age: 27, email: 'laura@example.com' },
      { name: 'James Black', age: 33, email: 'james@example.com' },
      { name: 'Samantha Hall', age: 31, email: 'samantha@example.com' },
      { name: 'Daniel Scott', age: 26, email: 'daniel@example.com' },
      { name: 'Olivia King', age: 24, email: 'olivia@example.com' },
      { name: 'Ethan Wright', age: 37, email: 'ethan@example.com' },
      { name: 'Ava Adams', age: 28, email: 'ava@example.com' },
    ];
  
    let columns = ['Name', 'Age', 'Email'];
    let currentPage = 1;
    let itemsPerPage = 5;
  
    // Compute total pages
    $: totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Compute current page data
    $: pagedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    function goToPage(page) {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
      }
    }
  </script>
  
  <div class="p-6">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            {#each columns as column}
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {#each pagedData as row}
            <tr>
              {#each Object.values(row) as cell}
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {cell}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
  
      <div class="flex justify-between mt-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
          on:click={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span class="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md"
          on:click={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  </div>
  