Project - **Digital Timer App**

link- **https://vgk02DigiTimer.ccbp.tech**

Technologies used- React.js, CSS, Flexbox, Javascript

--------------------------------------------------------------------------------------------------------------------------
### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif" alt="digital timer output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
</div>
<br/>

-----------------------------------------------------------------------------

The app has the following functionalities

- The default timer limit value is 25 minutes
- When the **Start** button is clicked,
  - The **Start** text will change to **Pause** text
  - The **play icon** will be replaced by **pause icon**
  - The **Timer** status will change to **Running**
  - The **Timer** will start running backwards from the timer limit value set
  - If the **Timer** has been paused after starting, it will resume from where it was paused
  - Both the **Plus** and **Minus** buttons will be disabled
- When the **Pause** button is clicked,
  - The **Pause** text will change to **Start** text
  - The **pause icon** will be replaced by **play icon**
  - The **Timer** will stop running backwards
  - The **Timer** status will be changed to **Paused**
  - Both the **Plus** and **Minus** buttons will be disabled
- When the button with the **Plus** symbol is clicked,
  - The timer limit value will be incremented by one minute
  - The **Timer** will display time with the increased timer limit value
- When the button with the **Minus** symbol is clicked,
  - The timer limit value will be decremented by one minute
  - The **Timer** will display time with the decreased timer limit value
- When the timer limit value is modified by clicking the **Plus** or **Minus** button and the **Start** button is clicked, then the **Timer** will start with the modified timer value
- When the **Timer** ends (displays **00:00**)
  - The **Pause** text will change to **Start** text
  - The **pause icon** will be replaced by **play icon**
  - The **Timer** will stop running backwards
  - The **Timer** status will be changed to **Paused**
- After completion of **Timer**, when the **Start** button is clicked,
  - The **Start** text will change to **Pause** text
  - The **play icon** will be replaced by **pause icon**
  - The **Timer** will start running backwards from the current timer limit value.
  - The **Timer** status will change to **Running**
- When the **Reset** button is clicked, then
  - The **Pause** text will change to **Start** text
  - The **pause icon** will be replaced by **play icon**
  - The **Timer** will stop running backwards
  - The **Timer** status will be changed to **Paused**
  - Initial **Timer** limit value will be displayed
  - Both the **Plus** and **Minus** buttons will be enabled

</details>

