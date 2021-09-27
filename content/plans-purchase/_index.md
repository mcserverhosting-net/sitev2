---
title: "Custom Plans"
draft: false

index: true

outputs:
  - "html"

sitemap:
  changefreq: "daily"
  priority: 1.0
  filename: "sitemap.xml"
  
cascade:
  outputs:
    - "json"

dedicatedCoresPopupText: >
  Dedicated cores aren't neccessary, as you'll use a share of a thread with zero selected. This means we will only reserve a faction of a cpu for your server and allow your server to "burst" up to 4 cores, though this will be shared with other servers on the same physical server. 
  Selecting a dedicated core reserves that entire thread for you, so you won't be subject to a "Noisy Neigbor" problem.

product:
  id: "custom-plan"
  name: "Custom Plan"
  price: 0.00

  customFields:
    - name: "RAM"
      type: "dropdown"
      value: "2GB"
      options:
        - name: "2GB"
          priceModifier: 4.00
        - name: "4GB"
          priceModifier: 8.00
        - name: "6GB"
          priceModifier: 12.00
        - name: "8GB"
          priceModifier: 16.00
        - name: "10GB"
          priceModifier: 20.00
        - name: "12GB"
          priceModifier: 24.00
        - name: "14GB"
          priceModifier: 28.00
        - name: "16GB"
          priceModifier: 32.00
        - name: "18GB"
          priceModifier: 36.00
        - name: "20GB"
          priceModifier: 40.00
        - name: "22GB"
          priceModifier: 44.00
        - name: "24GB"
          priceModifier: 48.00

    - name: "AMD CPU Cores"
      type: "dropdown"
      value: "0"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 15.00

        - name: "2"
          priceModifier: 30.00

        - name: "3"
          priceModifier: 45.00

        - name: "4"
          priceModifier: 60.00

    - name: "ARM CPU Cores"
      type: "dropdown"
      value: "0"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 5.00

        - name: "2"
          priceModifier: 10.00

    - name: "Extra: Minecraft Servers"
      type: "dropdown"
      value: "2"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 1.00

        - name: "2"
          priceModifier: 2.00

        - name: "3"
          priceModifier: 3.00

        - name: "4"
          priceModifier: 4.00

    - name: "Extra: VPS Servers"
      type: "dropdown"
      value: "0"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 1.00

        - name: "2"
          priceModifier: 2.00

        - name: "3"
          priceModifier: 3.00

        - name: "4"
          priceModifier: 4.00

    - name: "Extra: Web Hosting"
      type: "dropdown"
      value: "0"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 1.00

        - name: "2"
          priceModifier: 2.00

        - name: "3"
          priceModifier: 3.00

        - name: "4"
          priceModifier: 4.00

    - name: "Extra: Database Servers"
      type: "dropdown"
      value: "0"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 1.00

        - name: "2"
          priceModifier: 2.00

        - name: "3"
          priceModifier: 3.00

        - name: "4"
          priceModifier: 4.00

    - name: "Extra: Proxy Servers"
      type: "dropdown"
      value: "0"
      options:
        - name: "0"
          priceModifier: 0.00

        - name: "1"
          priceModifier: 1.00

        - name: "2"
          priceModifier: 2.00

        - name: "3"
          priceModifier: 3.00

        - name: "4"
          priceModifier: 4.00

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 0.00
---
