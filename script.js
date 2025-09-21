function updateMessage() {
      const now = new Date();
      const hours = now.getHours();

      // Greeting logic
      let greeting = "Hello";
      if (hours < 12) {
        greeting = "Good Morning";
      } else if (hours < 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }
      document.getElementById("greeting").textContent = greeting + "!";

      // Seat reservation logic
      const startHour = 15; // 3:00 PM
      const endHour = 22;   // 10:00 PM
      const seatMsg = document.getElementById("seatMessage");

      if (hours >= startHour && hours < endHour) {
        seatMsg.innerHTML = 
          `⚠️ <span class="reserved">This seat is reserved from 3:00 PM to 10:00 PM.<br>
          If you're here, Kindly leave within 10 min. 🙏</span>`;
      } else {
       seatMsg.innerHTML = 
            `✅ <span class="free">The seat is free right now. You're good to sit! 😎<br>But make sure to leave before 3:00PM 🙏</span>`;
      }
    }
    


    updateMessage();

