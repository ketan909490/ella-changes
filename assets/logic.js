// Enhanced Quantity-Based Custom Pricing Solution with Shape Selection - Your Original Logic + Compact Design
document.addEventListener('DOMContentLoaded', function() {
  
    // Get first variant price (base price) - YOUR ORIGINAL
    function getFirstVariantPrice() {
        let lastvarientprice = document.getElementById("lastvarientPrice").value
        
        if ( lastvarientprice !== 'undefined' && lastvarientprice) {
            return lastvarientprice / 100;
        }
        
        return 100;
    }

    // Calculate area based on shape - YOUR ORIGINAL
    function calculateArea(shape, dimensions) {
        const { width, height, diameter } = dimensions;
        
        switch(shape) {
            case 'rectangle':
                return width * height;
            case 'square':
                return width * width;
            case 'round':
                const radius = diameter * diameter;
                return radius;
            case 'runner':
                return width * height;
            default:
                return width * height;
        }
    }

    // Calculate required quantity to match custom price - YOUR ORIGINAL
    function calculateRequiredQuantity(customPrice, basePrice) {
        return Math.ceil(customPrice / basePrice);
    }

    // Get shape frame SVG - YOUR ORIGINAL + Simple shapes for dropdown change
    function getShapeFrame(shape, width, height, diameter) {
        const svgWidth = 100;
        const svgHeight = 80;
        
        switch(shape) {
            case 'rectangle':
                if (width && height) {
                    // With dimensions
                    const rectWidth = Math.min(svgWidth * 0.7, (width / height) * (svgHeight * 0.5));
                    const rectHeight = Math.min(svgHeight * 0.5, (height / width) * (svgWidth * 0.7));
                    const rectX = (svgWidth - rectWidth) / 2;
                    const rectY = (svgHeight - rectHeight) / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <rect x="${rectX}" y="${rectY}" width="${rectWidth}" height="${rectHeight}" 
                              fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                        <text x="${svgWidth/2}" y="${svgHeight - 5}" text-anchor="middle" font-size="10" fill="#999">
                            ${width} × ${height}
                        </text>
                    </svg>`;
                } else {
                    // Simple shape
                    const rectWidth = svgWidth * 0.7;
                    const rectHeight = svgHeight * 0.5;
                    const rectX = (svgWidth - rectWidth) / 2;
                    const rectY = (svgHeight - rectHeight) / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <rect x="${rectX}" y="${rectY}" width="${rectWidth}" height="${rectHeight}" 
                              fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                    </svg>`;
                }
            
            case 'square':
                if (width) {
                    const squareSize = Math.min(svgWidth * 0.5, svgHeight * 0.5);
                    const squareX = (svgWidth - squareSize) / 2;
                    const squareY = (svgHeight - squareSize) / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <rect x="${squareX}" y="${squareY}" width="${squareSize}" height="${squareSize}" 
                              fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                        <text x="${svgWidth/2}" y="${svgHeight - 5}" text-anchor="middle" font-size="10" fill="#999">
                            ${width} × ${width}
                        </text>
                    </svg>`;
                } else {
                    const squareSize = svgWidth * 0.5;
                    const squareX = (svgWidth - squareSize) / 2;
                    const squareY = (svgHeight - squareSize) / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <rect x="${squareX}" y="${squareY}" width="${squareSize}" height="${squareSize}" 
                              fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                    </svg>`;
                }
            
            case 'round':
                if (diameter) {
                    const radius = Math.min(svgWidth * 0.25, svgHeight * 0.25);
                    const centerX = svgWidth / 2;
                    const centerY = svgHeight / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <circle cx="${centerX}" cy="${centerY}" r="${radius}" 
                                fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                        <text x="${svgWidth/2}" y="${svgHeight - 5}" text-anchor="middle" font-size="10" fill="#999">
                            Ø ${diameter}
                        </text>
                    </svg>`;
                } else {
                    const radius = svgWidth * 0.25;
                    const centerX = svgWidth / 2;
                    const centerY = svgHeight / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <circle cx="${centerX}" cy="${centerY}" r="${radius}" 
                                fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                    </svg>`;
                }
            
            case 'runner':
                if (width && height) {
                    const runnerWidth = svgWidth * 0.8;
                    const runnerHeight = svgHeight * 0.3;
                    const runnerX = (svgWidth - runnerWidth) / 2;
                    const runnerY = (svgHeight - runnerHeight) / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <rect x="${runnerX}" y="${runnerY}" width="${runnerWidth}" height="${runnerHeight}" 
                              fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                        <text x="${svgWidth/2}" y="${svgHeight - 5}" text-anchor="middle" font-size="10" fill="#999">
                            ${width} × ${height}
                        </text>
                    </svg>`;
                } else {
                    const runnerWidth = svgWidth * 0.8;
                    const runnerHeight = svgHeight * 0.3;
                    const runnerX = (svgWidth - runnerWidth) / 2;
                    const runnerY = (svgHeight - runnerHeight) / 2;
                    return `<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
                        <rect x="${runnerX}" y="${runnerY}" width="${runnerWidth}" height="${runnerHeight}" 
                              fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3,3"/>
                    </svg>`;
                }
            
            default:
                return '';
        }
    }

    // Update quantity display and calculation - YOUR ORIGINAL LOGIC
    function updateQuantityAndPrice() {
        const shapeSelect = document.getElementById('shape-select');
        const widthInput = document.getElementById('width-input');
        const heightInput = document.getElementById('height-input');
        const diameterInput = document.getElementById('diameter-input');
        const priceDisplay = document.getElementById('calculated-price-display');
        const areaDisplay = document.getElementById('area-display');
        const shapeFrame = document.getElementById('shape-frame');
        const hiddenPriceInput = document.getElementById('calculated-price-hidden');
        const hiddenAreaInput = document.getElementById('total-area-hidden');
        const hiddenQtyInput = document.getElementById('required-quantity-hidden');

        if (!shapeSelect) return;

        const shape = shapeSelect.value;
        const width = parseFloat(widthInput?.value) || 0;
        const height = parseFloat(heightInput?.value) || 0;
        const diameter = parseFloat(diameterInput?.value) || 0;
     
        document.getElementById('shape-hidden').value = shape;
        document.getElementById('width-hidden').value = width || '';
        document.getElementById('height-hidden').value = height || '';
        document.getElementById('diameter-hidden').value = diameter || '';


        // Show/hide inputs based on shape
        updateInputVisibility(shape);

        // Validate inputs based on shape
        let isValid = false;
        let area = 0;
        let dimensions = { width, height, diameter };

        switch(shape) {
            case 'rectangle':
                isValid = width > 0 && height > 0;
                break;
            case 'runner':
                isValid = width > 0 && height > 0;
                break;
            case 'square':
                isValid = width > 0;
                dimensions.height = width; // Square uses width for both dimensions
                break;
            case 'round':
                isValid = diameter > 0;
                break;
        }
       
        if (isValid) {
            area = calculateArea(shape, dimensions);

            // ✅ Get base variant price (actual product price)
            const basePrice = getFirstVariantPrice();

            // ✅ Use variant price per sq.ft instead of static 20
            const pricePerSqFt = basePrice; 
            const customCalculatedPrice = area * pricePerSqFt;

            // ✅ Calculate required quantity
            const requiredQty = calculateRequiredQuantity(customCalculatedPrice, basePrice);

            // ✅ Final cart price (Shopify will see qty * basePrice)
            const actualCartPrice = requiredQty * basePrice;

            // --- Update displays
            priceDisplay.innerHTML = `$${customCalculatedPrice.toFixed(2)}`;
            areaDisplay.innerHTML = `${area.toFixed(2)} sq ft`;

            // --- Update shape frame with dimensions
            shapeFrame.innerHTML = getShapeFrame(shape, dimensions.width, dimensions.height, diameter);


            // --- Update Shopify quantity field directly
            const quantityInputs = document.querySelectorAll('input[name="quantity"], .quantity__input');
            quantityInputs.forEach(input => {
                input.value = requiredQty;
            });

            // --- Agar hidden qty input nahi hai to create kar do
            let hiddenQtyField = document.getElementById('required-quantity-hidden');
            if (!hiddenQtyField) {
                hiddenQtyField = document.createElement('input');
                hiddenQtyField.type = 'hidden';
                hiddenQtyField.id = 'required-quantity-hidden';
                hiddenQtyField.name = 'quantity'; // Shopify needs this name
                document.querySelector('form[action*="/cart/add"]').appendChild(hiddenQtyField);
            }
            hiddenQtyField.value = requiredQty;

            // --- Enable add to cart button
            enableAddToCartButton();

        } else {
            // --- Reset displays if invalid
            priceDisplay.innerHTML = 'Enter dimensions';
            areaDisplay.innerHTML = '';
            shapeFrame.innerHTML = getShapeFrame(shape);

            hiddenPriceInput.value = '';
            hiddenAreaInput.value = '';
            hiddenQtyInput.value = '';

            // Reset quantity to 1
            updateQuantityInput(1);

            // Disable add to cart button
            disableAddToCartButton();
        }

    }

    // Update input visibility based on selected shape - YOUR ORIGINAL + Show shape
    function updateInputVisibility(shape) {
        const widthGroup = document.getElementById('width-group');
        const heightGroup = document.getElementById('height-group');
        const diameterGroup = document.getElementById('diameter-group');
        const widthLabel = document.querySelector('label[for="width-input"]');
        const heightLabel = document.querySelector('label[for="height-input"]');
        const shapeFrame = document.getElementById('shape-frame');

        // Hide all inputs first
        widthGroup.style.display = 'none';
        heightGroup.style.display = 'none';
        diameterGroup.style.display = 'none';

        // Show simple shape when dropdown changes
        if (shapeFrame) {
            shapeFrame.innerHTML = getShapeFrame(shape);
        }

        switch(shape) {
            case 'rectangle':
                widthGroup.style.display = 'block';
                heightGroup.style.display = 'block';
                widthLabel.textContent = 'Width (ft)';
                heightLabel.textContent = 'Length (ft)';
                break;
            case 'square':
                widthGroup.style.display = 'block';
                widthLabel.textContent = 'Size (ft)';
                break;
            case 'round':
                diameterGroup.style.display = 'block';
                break;
            case 'runner':
                widthGroup.style.display = 'block';
                heightGroup.style.display = 'block';
                widthLabel.textContent = 'Width (ft)';
                heightLabel.textContent = 'Length (ft)';
                break;
        }
    }

    // Update the quantity input in the form - YOUR ORIGINAL
    function updateQuantityInput(qty) {
        const quantityInputs = document.querySelectorAll('input[name="quantity"], #Quantity, .quantity__input');
        quantityInputs.forEach(input => {
            input.value = qty;
            if (input.closest('.product-form__quantity') || input.closest('[class*="quantity"]')) {
                input.closest('.product-form__quantity, [class*="quantity"]').style.display = 'none';
            }
        });
    }

    // Create custom size button - YOUR ORIGINAL
    function createCustomSizeButton() {
        return `
            <button type="button" id="custom-size-btn" class="custom-size-button">
                Customize Your Rug
            </button>
        `;
    }

    // Create calculator HTML - COMPACT DESIGN
    function createCalculatorHTML() {
        const calculatorHTML = `
            <div class="custom-size-calculator" id="custom-size-calculator" style="display: none;">
                <div class="calculator-header">
                    <h3>Custom Size Calculator</h3>
                    <button type="button" class="close-calculator" id="close-calculator">×</button>
                </div>
                
                <div class="calculator-content-compact">
                    <!-- First Row: Shape and Dimensions -->
                    <div class="dimensions-row">
                        <div class="shape-selector-compact">
                            <label for="shape-select">Shape:</label>
                            <select id="shape-select" name="properties[Shape]">
                                <option value="rectangle">Rectangle</option>
                                <option value="square">Square</option>
                                <option value="round">Round</option>
                                <option value="runner">Runner</option>
                            </select>
                        </div>

                        <div class="dimensions-inputs-compact">
                            <div class="input-group-compact" id="width-group">
                                <label for="width-input">Width (ft)</label>
                                <input type="number" id="width-input" name="properties[Width]" 
                                       min="1" step="0.1" placeholder="Width">
                            </div>
                            
                            <div class="input-group-compact" id="height-group">
                                <label for="height-input">Length (ft)</label>
                                <input type="number" id="height-input" name="properties[Height]" 
                                       min="1" step="0.1" placeholder="Length">
                            </div>
                            
                            <div class="input-group-compact" id="diameter-group" style="display: none;">
                                <label for="diameter-input">Diameter (ft)</label>
                                <input type="number" id="diameter-input" name="properties[Diameter]" 
                                       min="1" step="0.1" placeholder="Diameter">
                            </div>
                        </div>

                        <div class="shape-preview-compact">
                            <div id="shape-frame"></div>
                        </div>
                    </div>

                    <!-- Second Row: Results -->
                    <div class="results-row">
                        <div class="area-display-compact">
                            <span class="label">Area:</span>
                            <span id="area-display">-</span>
                        </div>
                        <div class="price-display-compact">
                            <span class="label">Price:</span>
                            <span id="calculated-price-display">Enter dimensions</span>
                        </div>
                        <button type="button" id="calculate-btn" class="calculate-button-compact">
                            CALCULATE
                        </button>
                    </div>
                </div>

                <!-- Hidden fields for cart properties -->
                
                <input type="hidden" name="properties[Base Price]" value="${getFirstVariantPrice()}">
                
                
                <div class="calculator-note-compact">
                    <strong>Note:</strong> Cart will show equivalent quantity to match your custom price.
                </div>
            </div>
        `;
        return calculatorHTML;
    }

    // Insert custom size button and calculator - YOUR ORIGINAL
    function insertCustomSizeComponents() {
        const variantSelects = document.querySelector('variant-radios.product-option ');
        
        if (variantSelects) {
            // Insert custom size button after variant selects
            variantSelects.insertAdjacentHTML('afterend', createCustomSizeButton());
            
            // Insert calculator after the button
            const customSizeBtn = document.getElementById('custom-size-btn');
            if (customSizeBtn) {
                customSizeBtn.insertAdjacentHTML('afterend', createCalculatorHTML());
            }
        }
    }

    // Add event listeners - YOUR ORIGINAL LOGIC
    function addEventListeners() {
        const customSizeBtn = document.getElementById('custom-size-btn');
        const closeCalculator = document.getElementById('close-calculator');
        const calculator = document.getElementById('custom-size-calculator');
        const calculateBtn = document.getElementById('calculate-btn');
        const shapeSelect = document.getElementById('shape-select');
        const widthInput = document.getElementById('width-input');
        const heightInput = document.getElementById('height-input');
        const diameterInput = document.getElementById('diameter-input');

        // Custom size button click
        if (customSizeBtn && calculator) {
            customSizeBtn.addEventListener('click', function() {
              calculator.style.display = 'block';
              customSizeBtn.style.display = 'none';
          
              selectLastVariant(); // ← This line does the trick
          
              updateInputVisibility('rectangle'); // Default
              const qtySelectors = document.querySelectorAll('.product-form__quantity');
              qtySelectors.forEach(selector => {
                  selector.style.display = 'none';
              });
          });
        }

        // Close calculator
        if (closeCalculator && calculator) {
            closeCalculator.addEventListener('click', function() {
                calculator.style.display = 'none';
                customSizeBtn.style.display = 'block';
                const qtySelectors = document.querySelectorAll('.product-form__quantity');
                qtySelectors.forEach(selector => {
                    selector.style.display = 'block';
                });
            });
        }

        // Shape change - YOUR ORIGINAL
        if (shapeSelect) {
            shapeSelect.addEventListener('change', function() {
                updateInputVisibility(this.value);
            });
        }

        // Calculate button - YOUR ORIGINAL (ONLY trigger on calculate button)
        if (calculateBtn) {
            calculateBtn.addEventListener('click', updateQuantityAndPrice);
        }

        // NO INPUT CHANGE LISTENERS - Only calculate on button click as per your original logic
    }

    // Enable/disable add to cart button - YOUR ORIGINAL
    function enableAddToCartButton() {
        const addToCartButtons = document.querySelectorAll('[name="add"], .btn-cart, [class*="add-to-cart"], #AddToCart');
        addToCartButtons.forEach(button => {
            button.disabled = false;
        });
    }

    function disableAddToCartButton() {
        const addToCartButtons = document.querySelectorAll('[name="add"], .btn-cart, [class*="add-to-cart"], #AddToCart');
        addToCartButtons.forEach(button => {
            button.disabled = true;
            button.style.opacity = '0.6';
        });
    }

    // Validate form before submission - YOUR ORIGINAL
    function validateForm() {
        const productForms = document.querySelectorAll('form[action*="/cart/add"]');
        
        productForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const calculator = document.getElementById('custom-size-calculator');
                if (calculator && calculator.style.display !== 'none') {
                    const qtyInput = document.getElementById('required-quantity-hidden');
                    const shapeSelect = document.getElementById('shape-select');

                    if (!qtyInput.value || qtyInput.value === '1') {
                        e.preventDefault();
                        alert('Please calculate your custom size before adding to cart.');
                        return false;
                    }

                    // Update the main quantity input one final time before submission
                    const mainQtyInput = form.querySelector('input[name="quantity"]');
                    if (mainQtyInput && qtyInput.value) {
                        mainQtyInput.value = qtyInput.value;
                    }

                    console.log(`Adding to cart: ${qtyInput.value} qty of base product ($${getFirstVariantPrice()} each) = $${(qtyInput.value * getFirstVariantPrice()).toFixed(2)}`);
                }
            });
        });
    }
    // Trigger variant change event on load to ensure add-to-cart works
    function triggerVariantChange() {
        const variantSelect = document.querySelector('.product-form select[name="id"]');
        if (variantSelect && variantSelect.value) {
            variantSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    function selectLastVariant() {
      const radioVariants = document.querySelectorAll('input[type="radio"][name^="Size"]');
      if (radioVariants.length > 0) {
          const lastRadio = radioVariants[radioVariants.length - 1];
  
          if (lastRadio) {
              lastRadio.checked = true;
             
  
              // Trigger the change event so Shopify registers the new selection
              lastRadio.dispatchEvent(new Event('change', { bubbles: true }));
             if (lastRadio.checked = true) {
                const priceSpan = document.querySelector(".price-item--regular");
                if (priceSpan) {
                    priceSpan.style.display = "none";
                }
                const salePrice = document.querySelector(".price-item--sale");
                if (salePrice) {
                    salePrice.style.display = "none";
                }
              }
          }
      }
  }
 

    // Initialize everything - YOUR ORIGINAL
    function init() {
        insertCustomSizeComponents();
        triggerVariantChange();
        addEventListeners();
        validateForm();
    }
  

    // Run initialization
    init();

    // Also run on AJAX page loads
    document.addEventListener('shopify:section:load', init);
});
