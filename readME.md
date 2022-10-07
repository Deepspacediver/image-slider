Side-project from TOP. Image slider with carousel design.

Pseudocode


Position images as individual slides inside a frame container
  =>By default first picture is shown in the frame, the rest of the pictures are hidden


Previous/Next functions queries element currently shown in the frame and targets PreviousSibling/nextSibling sibling and attaches active class to said sibling
  => if there is no previousElementsibling - set active class to last child of the slideContainer
  => if there is no nextElementSibling - set active class to the first child of the slideContainer

  For nav carousle assign dataIndex to each navDot
  Get each slide inside an array
  When navDot with specific index is clicked activate slide with          corresponding index

set timout of 5 seconds to fire "next" function
reset timer if any of the events is fired


function “next” and “previous” which will advance to the next or previous slide accordingly. Make the transitions smooth using simple effects.
