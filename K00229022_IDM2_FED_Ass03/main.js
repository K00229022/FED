var app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        productOne: 'Lebron Soldier 12 FlyEase',
        imageOne: 'lebron12Blue.PNG',
        inventoryOne: 100,
        detailsOne: ["Zip closure ensures easy entry", "Targeteed breathability and support", "impact cushioning"],
        variantsOne: [
          
          {
              variantId: 2234,
              variantColor: "Blue",
              variantImage: 'lebron12Blue.PNG'
          }
        ],
        
        
        
        
        
        
        
        productTwo: 'Under Armour Lockdown 3 Basketball Shoes',
        imageTwo: 'underArmourShoesRed.PNG',
        inventoryTwo: 100,
        detailsTwo: ["Breathable mesh", "Durable solid rubber outsole", "366g in weight"],
        variantsTwo: [
            {
                variantId: 2235,
                variantColor: "Red"
            },
        ],
        
        
        
        
        
        
        
        productThree: 'Dame 5 shoes',
        imageThree: 'dameFiveBlack.PNG',
        inventoryThree: 100,
        detailsThree: ["Flexible cushioning", "Internal foam pods", "Extra grip"],
        variantsThree: [
            {
                variantId: 2236,
                variantColor: "Black"
            },
        ],
        
        
        
        
        
        
        
        productFour: 'Kobe AD',
        imageFour: 'kobeADWhite.PNG',
        inventoryFour: 100,
        detailsFour: ["Leather and textile construction", "Foam midsole", "Durable rubber tread"],
        variantsFour: [
            {
                variantId: 2240,
                variantColor: "White"
            },
        ],
        
        
        
        
        
        
        
        productFive: 'Marquee Boost Shoes',
        imageFive: 'marqueeBoostNavy.PNG',
        inventoryFive: 100,
        detailsFive: ["Moulded ankle collar", "Responsive midsole", "herringbone outsole"],
        variantsFive: [
            {
                variantId: 2242,
                variantColor: "Navy"
            },
        ],
    
    
    
    
    
    
    
    
        productSix: 'Reversible Training Jersey',
        imageSix: 'reversiblejersey.PNG',
        inventorySix: 100,
        detailsSix: ["Reversible", "Breathable Mesh"],
        variantsSix: [
            {
                variantId: 2242,
                variantColor: "Black, Red"
            },
        ],
        
        
        
        
        
        
        
        productSeven: 'Black/Red Reversible Training Jersey',
        imageSeven: 'redblackjersey.PNG',
        inventorySeven: 100,
        detailsSeven: ["Reversible", "Breathable Mesh"],
        variantsSeven: [
            {
                variantId: 2242,
                variantColor: "Black, Red"
            },
        ],
        
        
        
        
        
        
        
        productEight: 'Blue/White Reversible Training Jersey',
        imageEight: 'bluewhitejersey.PNG',
        inventoryEight: 100,
        detailsEight: ["Reversible", "Breathable Mesh"],
        variantsEight: [
            {
                variantId: 2242,
                variantColor: "Blue, White"
            },
        ],
        
        
        
        
        
        
        
        productNine: 'Yellow Training Jersey',
        imageNine: 'yellowjersey.PNG',
        inventoryNine: 100,
        detailsNine: ["Breathable Mesh"],
        variantsNine: [
            {
                variantId: 2242,
                variantColor: "Yellow"
            },
        ],
        
        
        
        
        
        
        
        productTen: 'Orange/Purple Reversible Training Jersey',
        imageTen: 'orangepurplejersey.PNG',
        inventoryTen: 100,
        detailsTen: ["Breathable Mesh", "Reversible"],
        variantsTen: [
            {
                variantId: 2242,
                variantColor: "Yellow"
            },
        ],
        
    },
    
    
    
    
    
    
    
    methods: {
        addToCart: function() {
            this.cart += 1
        },
    }
    
})



/* Contact Form */



$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your surname'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your phone number'
                    },
                    phone: {
                        country: 'IRE',
                        message: 'Please enter a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please enter your town'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your county'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your eircode'
                    },
                    zipCode: {
                        country: 'IRE',
                        message: 'Please enter a vaild eircode'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please enter a query you may have'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});