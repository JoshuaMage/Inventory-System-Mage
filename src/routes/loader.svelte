<script>
    // Reactive variable to hold the number of dots to display
    let dotCount = 0;
  
    // Update the dotCount every 500ms (0.5 seconds)
    
    const interval = setInterval(() => {
      dotCount = (dotCount + 1) % 5; // Reset after 3 dots
    },500);
  
    // Clean up interval when the component is destroyed
    import { onDestroy } from 'svelte';
    onDestroy(() => clearInterval(interval));
  </script>
  

  <div class="flex items-center space-x-1 font-black font-3xl">
    <span class="text-2xl ">Loading</span>
    <span class="text-2xl">
      {'.'.repeat(dotCount)}
    </span>
  </div>
  

  