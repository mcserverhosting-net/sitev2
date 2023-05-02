---
title: pricing new
layout: price

product:
  - featured: false
    id: "basic"
    name: "Pichu"
    price: 5
    quota: 4
    measure: GB
    image: /images/price/cobblemonBg2.png
    selectedPlan: "monthly-plan"

    content:
      - name: "Helping Hand"
        content: "An optimized Cobblemon server great for friends!"
        icons:
          - /images/move-symbols/basic.svg

      - name: "Spark"
        content: "Just the right amount of power at the best price!"
        icons:
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "4 GB"

    featuredItems:
      - name: Dashboard Access
        icon: /images/move-symbols/fighting.svg

      - name: Snapshot Access
        icon: /images/move-symbols/steel.svg

    
    
    detail:
    - key: RAM
      value: 4 GB
    
    - key: STORAGE
      value: 40 GB
    
    - key: SERVER
      value: 1
    
    - key: BUNGEE
      value: 0

    availablePlans:
      - id: "monthly-plan"
        name: "Monthly Subscription"
        frequency: "monthly"
        interval: 1
        itemPrice: 5.00

    data_plans:
      - id: monthly-plan
        name: Monthly subscription
        frequency: monthly
        interval: 1
        count: 10
        price: 5

  - featured: true
    id: "evolved"
    name: "Pikachu"
    price: 50
    quota: 8
    measure: GB
    image: /images/price/pikaedited1.png
    selectedPlan: "monthly-plan"

    content:
      - name: "Power Move"
        content: "This is a paragraph of the feature of the Server plan for the Power Move."
        icons:
          - /images/move-symbols/basic.svg

      - name: "Power Move"
        content: "This is a paragraph of the feature of the Server plan for the Power Move."
        icons:
          - /images/move-symbols/basic.svg
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "8 GB"

    featuredItems:
      - name: Featured 1
        icon: /images/move-symbols/fighting.svg

      - name: Featured 1
        icon: /images/move-symbols/steel.svg
    
    detail:
    - key: RAM
      value: 4 GB
    
    - key: STORAGE
      value: 40 GB
    
    - key: SERVER
      value: 1
    
    - key: BUNGEE
      value: 0

    availablePlans:
      - id: "monthly-plan"
        name: "Monthly Subscription"
        frequency: "monthly"
        interval: 1
        itemPrice: 50.00

    data_plans:
      - id: monthly-plan
        name: Monthly subscription
        frequency: monthly
        interval: 1
        count: 10
        price: 50

  - featured: false
    id: "legendary"
    name: "Raichu"
    price: 90
    quota: 16
    measure: GB
    image: /images/price/raichuedited1.png
    selectedPlan: "monthly-plan"
    description: "This is "

    content:
      - name: "Power Move"
        content: "This is a paragraph of the feature of the Server plan for the Power Move."
        icons:
          - /images/move-symbols/basic.svg

      - name: "Power Move"
        content: "This is a paragraph of the feature of the Server plan for the Power Move."
        icons:
          - /images/move-symbols/basic.svg
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "16 GB"

    featuredItems:
      - name: Featured 1
        icon: /images/move-symbols/fighting.svg

      - name: Featured 1
        icon: /images/move-symbols/steel.svg
    
    detail:
    - key: RAM
      value: 16 GB
    
    - key: STORAGE
      value: 160 GB
    
    - key: SERVER
      value: 2
    
    - key: BUNGEE
      value: 1

    data_plans:
      - id: monthly-plan
        name: Monthly subscription
        frequency: monthly
        interval: 1
        count: 10
        price: 90
---
