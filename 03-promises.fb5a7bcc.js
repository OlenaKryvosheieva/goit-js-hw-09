!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');function o(e,n){return new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){c?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(c){c.preventDefault();for(var i=+e.value,u=1;u<=+t.value;u+=1)o(u,i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),i+=+n.value}))}();
//# sourceMappingURL=03-promises.fb5a7bcc.js.map
