    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

    const tab1 = document.querySelector('#tab1');
    tab1.addEventListener('click', selectTab1);

    const tab1next = document.querySelector('#tab1next');
    tab1next.addEventListener('click', selectTab2);


    const tab2 = document.querySelector('#tab2');
    tab2.addEventListener('click', selectTab2);

    const tab2next = document.querySelector('#tab2next');
    tab2next.addEventListener('click', selectTab3);

    const tab2back = document.querySelector('#tab2back');
    tab2back.addEventListener('click', selectTab1);


    const tab3 = document.querySelector('#tab3');
    tab3.addEventListener('click', selectTab3);

    const tab3next = document.querySelector('#tab3next');
    tab3next.addEventListener('click', selectTab4);

    const tab3back = document.querySelector('#tab3back');
    tab3back.addEventListener('click', selectTab2);


    const tab4 = document.querySelector('#tab4');
    tab4.addEventListener('click', selectTab4);

    const tab4back = document.querySelector('#tab4back');
    tab4back.addEventListener('click', selectTab3);

    function selectTab1() {
      const tab1 = document.querySelector('#tab1');
      tab1.classList.remove('done');

      const tab2 = document.querySelector('#tab2');
      tab2.classList.remove('done');

      const tab3 = document.querySelector('#tab3');
      tab3.classList.remove('done');

      const tab4 = document.querySelector('#tab4');
      tab4.classList.remove('done');

      tab1.parentElement.scrollLeft = tab1.offsetLeft;
      tab1.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    function selectTab2() {
      const tab1 = document.querySelector('#tab1');
      tab1.classList.add('done');

      const tab2 = document.querySelector('#tab2');
      tab2.classList.remove('done');

      const tab3 = document.querySelector('#tab3');
      tab3.classList.remove('done');

      const tab4 = document.querySelector('#tab4');
      tab4.classList.remove('done');

      tab2.parentElement.scrollLeft = tab2.offsetLeft;
      tab2.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    function selectTab3() {
      const tab1 = document.querySelector('#tab1');
      tab1.classList.add('done');

      const tab2 = document.querySelector('#tab2');
      tab2.classList.add('done');

      const tab3 = document.querySelector('#tab3');
      tab3.classList.remove('done');

      const tab4 = document.querySelector('#tab4');
      tab4.classList.remove('done');

      tab3.parentElement.scrollLeft = tab3.offsetLeft;
      tab3.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    function selectTab4() {
      const tab1 = document.querySelector('#tab1');
      tab1.classList.add('done');

      const tab2 = document.querySelector('#tab2');
      tab2.classList.add('done');

      const tab3 = document.querySelector('#tab3');
      tab3.classList.add('done');

      const tab4 = document.querySelector('#tab4');
      tab4.classList.remove('done');

      tab4.parentElement.scrollLeft = tab4.offsetLeft;
      tab4.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    const snipcartButton = document.querySelector('.snipcart-add-item');
    const itemData = {{ $data.Params.product }};

     
    // RAM Options
    const ramRange = document.querySelector('#ramRange');
    ramRange.addEventListener('change', onRamChange);

    const ramTotalAmount = document.querySelector('#ramTotalAmount');
    const ramTotalPrice = document.querySelector('#ramTotalPrice');

    function onRamChange(event) {
      const ramData = itemData.customfields.find( e => e.name === "RAM" );
      const newValue = ramData.options[event.target.value].name
      const newPrice = ramData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom1Value = newValue;

      ramTotalAmount.innerText = newValue;
      ramTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // AMD CPU Cores Options
    const amdRange = document.querySelector('#amdRange');
    amdRange.addEventListener('change', onAmdChange);

    const amdTotalAmount = document.querySelector('#amdTotalAmount');
    const amdTotalPrice = document.querySelector('#amdTotalPrice');

    function onAmdChange(event) {
      const amdData = itemData.customfields.find( e => e.name === "AMD CPU Cores" );
      const newValue = amdData.options[event.target.value].name
      const newPrice = amdData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom2Value = newValue;

      amdTotalAmount.innerText = newValue;
      amdTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // ARM CPU Cores Options
    const armRange = document.querySelector('#armRange');
    armRange.addEventListener('change', onArmChange);

    const armTotalAmount = document.querySelector('#armTotalAmount');
    const armTotalPrice = document.querySelector('#armTotalPrice');

    function onArmChange(event) {
      const armData = itemData.customfields.find( e => e.name === "ARM CPU Cores" );
      const newValue = armData.options[event.target.value].name
      const newPrice = armData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom3Value = newValue;

      armTotalAmount.innerText = newValue;
      armTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // Minecraft Servers Options
    const minecraftServersRange = document.querySelector('#minecraftServersRange');
    minecraftServersRange.addEventListener('change', onMinecraftServersChange);

    const minecraftTotalAmount = document.querySelector('#minecraftTotalAmount');
    const minecraftTotalPrice = document.querySelector('#minecraftTotalPrice');

    function onMinecraftServersChange(event) {
      const minecraftServersData = itemData.customfields.find( e => e.name === "Extra: Minecraft Servers" );
      const newValue = minecraftServersData.options[event.target.value].name
      const newPrice = minecraftServersData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom4Value = newValue;

      minecraftTotalAmount.innerText = newValue;
      minecraftTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // VPS Servers Options
    const vpsServersRange = document.querySelector('#vpsServersRange');
    vpsServersRange.addEventListener('change', onVpsServersChange);

    const vpsTotalAmount = document.querySelector('#vpsTotalAmount');
    const vpsTotalPrice = document.querySelector('#vpsTotalPrice');

    function onVpsServersChange(event) {
      const vpsServersData = itemData.customfields.find( e => e.name === "Extra: VPS Servers" );
      const newValue = vpsServersData.options[event.target.value].name
      const newPrice = vpsServersData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom5Value = newValue;

      vpsTotalAmount.innerText = newValue;
      vpsTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // Web Hosting Options
    const webHostingRange = document.querySelector('#webHostingRange');
    webHostingRange.addEventListener('change', onWebHostingChange);

    const webTotalAmount = document.querySelector('#webTotalAmount');
    const webTotalPrice = document.querySelector('#webTotalPrice');

    function onWebHostingChange(event) {
      const webHostingData = itemData.customfields.find( e => e.name === "Extra: Web Hosting" );
      const newValue = webHostingData.options[event.target.value].name
      const newPrice = webHostingData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom6Value = newValue;

      webTotalAmount.innerText = newValue;
      webTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // Database Servers Options
    const databaseServersRange = document.querySelector('#databaseServersRange');
    databaseServersRange.addEventListener('change', onDatabaseServersChange);

    const databaseTotalAmount = document.querySelector('#databaseTotalAmount');
    const databaseTotalPrice = document.querySelector('#databaseTotalPrice');

    function onDatabaseServersChange(event) {
      const databaseServersData = itemData.customfields.find( e => e.name === "Extra: Database Servers" );
      const newValue = databaseServersData.options[event.target.value].name
      const newPrice = databaseServersData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom7Value = newValue;

      databaseTotalAmount.innerText = newValue;
      databaseTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // Proxy Servers Options
    const proxyServersRange = document.querySelector('#proxyServersRange');
    proxyServersRange.addEventListener('change', onProxyServersChange);

    const proxyTotalAmount = document.querySelector('#proxyTotalAmount');
    const proxyTotalPrice = document.querySelector('#proxyTotalPrice');

    function onProxyServersChange(event) {
      const proxyServersData = itemData.customfields.find( e => e.name === "Extra: Proxy Servers" );
      const newValue = proxyServersData.options[event.target.value].name
      const newPrice = proxyServersData.options[event.target.value].priceModifier

      snipcartButton.dataset.itemCustom8Value = newValue;

      proxyTotalAmount.innerText = newValue;
      proxyTotalPrice.innerText = `\$${newPrice.toFixed(2)}/mo USD`;

      updateTotal();
    }

    // Utilities
    function updateTotal() {
      let totalPrice = itemData.price;

      itemData.customfields.forEach( (e, i) => {
        const valueSelected = snipcartButton.dataset[`itemCustom${i + 1}Value`]
        const optionSelected = e.options.find( e => String(e.name) === String(valueSelected) );
        const priceSelected = optionSelected.priceModifier;

        totalPrice += priceSelected;
      } );

      const totalPriceElement = document.querySelector('#totalPrice');
      totalPriceElement.innerText = `\$${totalPrice.toFixed(2)}`;
    }

    // Trigger all events at least once:
    ramRange.dispatchEvent(new Event('change'));
    amdRange.dispatchEvent(new Event('change'));
    armRange.dispatchEvent(new Event('change'));
    minecraftServersRange.dispatchEvent(new Event('change'));
    vpsServersRange.dispatchEvent(new Event('change'));
    webHostingRange.dispatchEvent(new Event('change'));
    databaseServersRange.dispatchEvent(new Event('change'));
    proxyServersRange.dispatchEvent(new Event('change'));

    document.addEventListener('snipcart.ready', () => {
      Snipcart.events.on('item.added', (cartItem) => {
      });
    });

