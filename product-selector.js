$(window).ready(function() {
    //--- VAR
    var theResult = [
        '', // Model Name
        '', // Part Number
        '', // isWired Suffix
        '' // Color
    ]
    var theModal = $('#js-modal');
    var closeModalBtn = $('#js-close-modal');
    var items = $('.item');
    var selectedModel = '';
    var stepOne = $('#js-modal-step-1');
    var stepTwo = $('#js-modal-step-2');
    var stepResults = $('#js-modal-step-results');
    var resultsBtn = $('#js-results-btn');
    var isWired = false;
    var backBtn = $('.js-back-button');



    //--- FUNCTIONS
    function closeModal() {
        theModal.addClass('hidden');
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

                // Set step 2 colorway info
                var theConnections = productSelector.products[model].connections;
                if (theConnections.length > 0) {
                    console.log('there are connections!')
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
                    console.log('there are colors!')
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

                // Set results model
                theResult[0] = productSelector.products[model].resultModel;

                // Close step 1 and open step 2
                stepOne.addClass('hidden');
                stepTwo.removeClass('hidden');
            }

        }
    }

    function setConnection() {
        console.log('connection clicked');
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
        console.log('color clicked');
        $('.colors .swatch').removeClass('selected');
        $(this).find('.swatch').addClass('selected');
        theResult[1] = $(this).data('part');
        theResult[3] = $(this).data('label');
        console.log(theResult);
    }

    function slideResults() {
        // Set results slide info
        stepResults.find('#js-result-model').html(theResult[0]);
        stepResults.find('#js-result-part').html('Part Number: ' + theResult[1] + theResult[2]);
        stepResults.find('#js-result-color').html('Color: ' + theResult[3]);

        //Close step 2 and open results
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
    }


    //--- INIT
    closeModalBtn.on('click', closeModal);
    items.on('click', selectItem);
    resultsBtn.on('click', slideResults);
    backBtn.on('click', reset);
    $(document).on('click', '.js-color', setColor);
    $(document).on('click', '.js-connection', setConnection);

});