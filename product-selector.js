$(window).ready(function() {
    //--- VAR
    var theResult = [
        '', // Model Name
        '', // Part Number
        '', // isWired Suffix
        '' // Color
    ]
    var triggerBtn = $('.js-product-selector');
    var theModal = $('#js-modal');
    var closeModalBtn = $('#js-close-modal');
    var items = $('.item');
    var selectedModel = '';
    var stepOne = $('#js-modal-step-1');
    var stepTwo = $('#js-modal-step-2');
    var stepResults = $('#js-modal-step-results');
    var resultsBtn = $('#js-results-btn');
    var errorNotice = $('#js-error-notice');
    var isWired = false;
    var backBtn = $('.js-back-button');
    var validConnection = [false,false];
    var validColor = [false,false];

    //--- FUNCTIONS
    function openModal() {
        theModal.fadeIn(250);
    }

    function closeModal() {
        theModal.fadeOut(250);
        setTimeout(reset,250);
    }

    function selectItem(e) {
        e.preventDefault();
        selectedModel = $(this).data('item');

        // Call slide two and pass in selected model
        slideTwo(selectedModel);
    }

    function slideTwo(model) {
        // Check if model exists in data object
        if (productSelector.products[model]) {

            // Check if model is available
            if(productSelector.products[model].available === true) {
                // Set step 2 model info
                stepTwo.find('#js-model-image').attr('src',productSelector.products[model].modelImage);
                stepTwo.find('#js-model-title').html(productSelector.products[model].modelTitle);
                stepTwo.find('#js-model-description').html(productSelector.products[model].modelDescription);

                // Set step 2 connection info
                var theConnections = productSelector.products[model].connections;
                if (theConnections.length > 0) {
                    
                    // Tell validation to check for connection
                    validConnection[0] = true;

                    stepTwo.find('#js-connection-options').removeClass('hidden');
                    
                    for (var i = 0; i < theConnections.length; i++) {
                        var theConnection = '\
                            <div class="connection js-connection" data-connection="' + theConnections[i].connection +'" data-model="' + theConnections[i].model +'" data-label="' + theConnections[i].label +'">\
                                <div class="swatch ' + theConnections[i].connection + '">\
                                    <div class="checkmark">\
                                        <img src="/images/checkmark.svg" alt="checkmark">\
                                    </div>';
                        switch (theConnections[i].connection) {
                            case 'clip':
                                theConnection += '<img src="/images/etrv_ma_harness.jpg" width="166" height="85" alt="clip connection">';
                                break;

                            case 'wired':
                                theConnection += '<img src="/images/connectors-wire-nuts.jpg" width="166" height="85" alt="wired connection"></img>';
                                break;
                            
                            case 'push':
                                theConnection += '<img src="/images/cole-push-connector.jpg" width="166" height="85" alt="gray push connection"></img>';
                                break;

                            case 'not-sure':
                                theConnection += '<img src="/images/connectors-not-sure.png" width="166" height="85" alt="not sure of connection"></img>';
                                break;
                            
                            default:
                                theConnection += '';
                        }
                        theConnection += '\
                                </div>\
                                <p>' + theConnections[i].label + '</p>\
                            </div>';
                        stepTwo.find('#js-connections').append(theConnection);
                    }
                }

                // Set step 2 colorway info
                var theColorways = productSelector.products[model].colorways;
                if (theColorways.length > 0) {
                    
                    // Tell validation to check for color
                    validColor[0] = true;
                    
                    stepTwo.find('#js-colorways').removeClass('hidden');
                    
                    for (var i = 0; i < theColorways.length; i++) {
                        var theColor = '\
                            <div class="color js-color"  data-part="' + theColorways[i].part +'" data-label="' + theColorways[i].label +'">\
                                <div class="swatch ' + theColorways[i].color + '">\
                                    <div class="checkmark">\
                                        <img src="/images/checkmark.svg" alt="checkmark">\
                                    </div>\
                                </div>\
                                <p>' + theColorways[i].label + '</p>\
                            </div>';
                        stepTwo.find('#js-colors').append(theColor);
                    }
                }

                // Hide left column if there are no connections or colorways
                if ( theConnections.length === 0 && theColorways.length === 0 ) {
                    $('.options').addClass('hidden');
                    $('.product-details').addClass('full-width');
                }

                // Set results model
                theResult[0] = productSelector.products[model].resultModel;

                // Close step 1 and open step 2
                stepOne.addClass('hidden');
                stepTwo.removeClass('hidden');
            }

        }
    }

    function setConnection() {

        // Validate connection
        validConnection[1] = true;
        $('.error-connection').remove();

        $('.connections .swatch').removeClass('selected');
        $(this).find('.swatch').addClass('selected');

        // Set global wired variable if true;
        if ( $(this).data('connection') === 'wired') {
            isWired = true;
            theResult[2] = "-C";
        } else {
            isWired = false;
            theResult[2] = "";
        }

        theResult[0] = $(this).data('model');
        console.log(theResult,isWired);
    }

    function setColor() {
        
        // Validate color
        validColor[1] = true;
        $('.error-color').remove();

        $('.colors .swatch').removeClass('selected');
        $(this).find('.swatch').addClass('selected');
        theResult[1] = $(this).data('part');
        theResult[3] = $(this).data('label');
        console.log(theResult);
    }

    function checkValidation() {
        var validationPassed = [false, false];
        
        if (validConnection[0] === true) {
            validationPassed[0] = validConnection[1];
        } else {
            validationPassed[0] = null;
        }

        if (validColor[0] === true) {
            validationPassed[1] = validColor[1];
        } else {
            validationPassed[1] = null;
        }

        console.log(validationPassed);

        // Approve or return error message
        if (validationPassed[0] != false && validationPassed[1] != false) {
            slideResults();
        } else {
            
            // Connection missing
            if (validationPassed[0] === false) {
                errorNotice.append('<li class="error-message error-connection">No connection was selected. Please select a connection option.</li>');
            }

            // Color missing
            if (validationPassed[1] === false) {
                errorNotice.append('<li class="error-message error-color">No color was selected. Please select a color preference.</li>');
            }
        }
    }

    function slideResults() {

        // Check validation by stating if something should be checked and the the boolean if it was
        

        // Set results slide info
        stepResults.find('#js-result-model').html(theResult[0]);
        stepResults.find('#js-result-part').html('Part Number: ' + theResult[1] + theResult[2]);
        stepResults.find('#js-result-color').html('Color: ' + theResult[3]);
        
        
        // Show the result image based on the desired/appropriate color option
        switch (theResult[3]) {
            case 'Black':
                stepResults.find('#js-result-image').attr('src','images/micro-air-black.png');
                break;

            case 'White':
                stepResults.find('#js-result-image').attr('src','images/micro-air-white.png');
                break;
        }

        // Close step 2 and open results
        stepTwo.addClass('hidden');
        stepResults.removeClass('hidden');
    }

    function reset() {
        // Hide all slides and display the first slide
        stepOne.removeClass('hidden');
        stepTwo.addClass('hidden');
        stepResults.addClass('hidden');

        // Empty result var
        theResult = ["","","",""];

        // Empty the connections and colors
        stepTwo.find('#js-connection-options').addClass('hidden');
        stepTwo.find('#js-connections').html('');
        stepTwo.find('#js-colorways').addClass('hidden');
        stepTwo.find('#js-colors').html('');
        $('.options').removeClass('hidden');
        $('.product-details').removeClass('full-width');

        // Reset validation
        validConnection = [false,false];
        validColor = [false,false];
        errorNotice.html('');
    }


    //--- INIT
    triggerBtn.on('click', openModal);
    closeModalBtn.on('click', closeModal);
    items.on('click', selectItem);
    resultsBtn.on('click', checkValidation);
    backBtn.on('click', reset);
    $(document).on('click', '.js-color', setColor);
    $(document).on('click', '.js-connection', setConnection);
});