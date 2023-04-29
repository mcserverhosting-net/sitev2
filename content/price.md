---
title: pricing new
layout: price

product:
  - featured: false
    id: "basic"
    name: "Pichu"
    price: 25
    quota: 4
    measure: GB
    image: /images/price/cobblemonBg2.png
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
        value: "4 GB"

    featuredItems:
      - name: Featured 1
        icon: /images/move-symbols/fighting.svg

      - name: Featured 1
        icon: /images/move-symbols/steel.svg

    details:
      ram: 4 GB
      storage: 40 GB
      server: 1
      bungee: 0

    availablePlans:
      - id: "monthly-plan"
        name: "Monthly Subscription"
        frequency: "monthly"
        interval: 1
        itemPrice: 25.00

    data_plans:
      - id: monthly-plan
        name: Monthly subscription
        frequency: monthly
        interval: 1
        count: 10
        price: 25

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

    details:
      ram: 4 GB
      storage: 40 GB
      server: 1
      bungee: 0

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

    details:
      ram: 16 GB
      storage: 160 GB
      server: 2
      bungee: 1

    data_plans:
      - id: monthly-plan
        name: Monthly subscription
        frequency: monthly
        interval: 1
        count: 10
        price: 90
---
