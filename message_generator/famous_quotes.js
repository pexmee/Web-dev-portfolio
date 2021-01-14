/**
 * This is a famous quotes generator that 
 * generates a different quote every time a user prompts for one.
 **/ 


const randMess = () => {
    const container = {
        0 : caesarQuote = {
            quotes: caesar = [
                "Men in general are quick to believe that which they wish to be true.",
                "Experience is the teacher of all things",
                "Veni, vidi, vici.",
                "A coward dies a thousand deaths, the gallant never taste of death but once.",
                "As a rule, what is out of sight disturbs men's minds more seriously than what they see.",
                "In the end, it is impossible not to become what others believe you are.",
                "It is not the well-fed, long-haired men I fear, but the pale and the hungry looking.",
                "It is better to suffer once than to be in perpetual apprehension.",
                "Great things should be done without hesitation so that the feeling of danger would not weaken the courage and speed.",
                "Which death is preferably to every other? 'The unexpected.'"
            ],
            present (){
                return this.quotes[Math.floor(Math.random()*caesar.length)] + "\n-Julius Caesar";
            }
        },
        1 : hawkingQuote = {
            quotes: hawking = [
                "Women. They are a complete mystery.",
                "Quiet people have the loudest minds.",
                "However difficult life may seem, there is always something you can do, and succeed at. It matters that you don't just give up.",
                "Intelligence is the ability to adapt to change.",
                "Life would be tragic if it weren't funny.",
                "The universe doesn't allow perfection.",
                "Work gives you meaning and purpose and life is simply empty without it.",
                "God is the name people give to the reason we are here.",
                "People won't have time for you if you are always angry or complaining.",
                "I'm not afraid of death, but I'm in no hurry to die.",
                "Just because I do a lot of thinking doesn't mean I don't like parties and getting into trouble."
            ],
            present (){
                return this.quotes[Math.floor(Math.random()*hawking.length)] + "\n-Stephen Hawking";
            }
        },
        2 : jefferiesQuote = {
            quotes: jefferies = [
                "I'm not scared of dying, because I'm an atheist. I won't even know I'm dead. You know why? Because I'll be fuckin' dead.",
                "On porn it seems very inviting, she seems to be having fun, but the thing is.. You can't smell porn.",
                "If you don't drink you're a boring cunt and all of your stories suck.",
                "We have a drinking game in australia, it's called drinking.",
                "If you hate gay marriage, then don't marry a gay person.",
                "The thing about crazy people: they don't know they are crazy. That's whats make them crazy.",
                "I could never be gay because I could never fuck someone I respect",
                "The smart are always asking questions.. and that's like fucking cancer to religion.",
                "Here's the good thing about people who believe in god.. They're idiots.",
            ],
            present (){
                return this.quotes[Math.floor(Math.random()*jefferies.length)] + "\n-Jim Jefferies";
            }
        },
        randQuote () {
            const randNum = Math.floor(Math.random()*3); 
            return this[randNum].present();
        },
    };

    console.log(container.randQuote()); // Testing with node.js
};

randMess(); // Just for testing purposes with node. 
