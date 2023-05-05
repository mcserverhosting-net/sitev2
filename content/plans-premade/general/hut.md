---
title: "Hut"
draft: false
category: "General"
weight: 1

product:
  id: "general-hut"
  name: "Hut"
  price: "6.40"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "2 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "10 GiB"

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
      itemPrice: 6.4
---
