## You

Center the text under div with class heading using bootstrap:

<div class="container d-flex mt-5">
  <div class="heading">
    <h1>Calculate Your Income Taxes</h1>
    <p>Compares your taxes under the new and old regimes</p>
  </div>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <!-- To be implemented once everything is ready  -->
  <!-- <button class="btn btn-secondary mx-auto my-5" (click)="next()">Next</button> -->
</div>

## Genie

To center the text under div with class heading using bootstrap, you can use text-center class provided by Bootstrap. Add the class "text-center" to the div with class "heading". Your updated code will look like this:

```
<div class="container d-flex mt-5">
  <div class="heading text-center">
    <h1>Calculate Your Income Taxes</h1>
    <p>Compares your taxes under the new and old regimes</p>
  </div>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <!-- To be implemented once everything is ready  -->
  <!-- <button class="btn btn-secondary mx-auto my-5" (click)="next()">Next</button> -->
</div>
```

## You

Write css to animate text under heading class  when hovered.
The text should slide to right a bit and then come back to normal position:

<div class="container d-flex mt-5">
  <div class="heading text-center">
    <h1>Calculate Your Income Taxes</h1>
    <p>Compares your taxes under the new and old regimes</p>
  </div>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <!-- To be implemented once everything is ready  -->
  <!-- <button class="btn btn-secondary mx-auto my-5" (click)="next()">Next</button> -->
</div>

## Genie

To add animation to the text under `heading` class, you can use CSS transition property. Here's an example code that slides the text to the right when hovered:

```css
.heading p {
  transition: all 0.3s ease-out;
}

.heading p:hover {
  transform: translateX(10px);
}
```

This will animate the paragraph when it is hovered by sliding it 10 pixels towards the right with a duration of 0.3 seconds and an ease-out timing function. When the mouse is moved away from the paragraph, it will return to its original position smoothly using the transition effect. 

You can increase or decrease the pixel value in the `translateX()` function to adjust the distance covered during the slide animation.