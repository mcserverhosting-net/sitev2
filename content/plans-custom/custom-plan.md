---
title: "Custom Plan"
draft: false

product:
  id: "general-hut"
  name: "Custom Plan"
  price: "10.00"

  customFields:
    - name: "RAM"
      type: "dropdown"
      value: "2GB"
      options:
        - name: "1GB"
          priceModifier: "1.00"

        - name: "2GB"
          priceModifier: "2.00"

        - name: "3GB"
          priceModifier: "3.00"

        - name: "4GB"
          priceModifier: "4.00"

    - name: "AMD CPU Cores"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

    - name: "ARM CPU Cores"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

    - name: "Extra: Minecraft Server"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

    - name: "Extra: VPS Server"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

    - name: "Extra: Web Hosting"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

    - name: "Extra: Database Server"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

    - name: "Extra: Proxy Server"
      type: "dropdown"
      value: "0"
      options:
        - name: "1"
          priceModifier: "1.00"

        - name: "2"
          priceModifier: "2.00"

        - name: "3"
          priceModifier: "3.00"

        - name: "4"
          priceModifier: "4.00"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 10.00
---
