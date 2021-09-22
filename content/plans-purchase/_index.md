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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
  gravida leo, vel blandit diam. Sed vehicula enim vel arcu laoreet rhoncus.
  Phasellus a dignissim est, eget mollis mi. Curabitur iaculis eget magna a
  luctus. Aenean non interdum libero. Vestibulum et velit et sapien luctus
  bibendum a aliquam magna.

product:
  id: "custom-plan"
  name: "Custom Plan"
  price: 0.00

  customFields:
    - name: "RAM"
      type: "dropdown"
      value: "2GB"
      options:
        - name: "1GB"
          priceModifier: 1.00

        - name: "2GB"
          priceModifier: 2.00

        - name: "3GB"
          priceModifier: 3.00

        - name: "4GB"
          priceModifier: 4.00

    - name: "AMD CPU Cores"
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

    - name: "ARM CPU Cores"
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
