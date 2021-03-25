## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

## HTML
1) Button
    * why? addEventListener to get computers throw and compare against users pick
2) Radio Button x3
    * why? one for rock, one for paper, one for scissors.  mutually exclusive
    * how? use name attibute with same value across the board.  Use querySelector in place of getElementById
3) Div x4
    * why? One div for wins, one for ties, ones for losses, one for total
    * how? .textConent = math stuff

## Initialize State
1) wins: 0
2) losses: 0
3) ties: 0

## Events
1) User clicks submit
    * Computer randomly selects rock, paper, or scissors
    * get users selection from radio buttons
    * compare users selection to computers random pick
    * increment either wins, losses, or ties
    * display new values

