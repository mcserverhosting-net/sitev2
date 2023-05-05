---
title: "Country"
draft: false
category: "General"
weight: 6

product:
  id: "general-country"
  name: "Hut"
  price: "38.40"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "12 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "100 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m2"

    - name: "DATABASES"
      type: "readonly"
      value: 1

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 10
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 38.4
---
