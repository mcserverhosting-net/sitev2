---
title: "rabbit"
draft: false
category: "Economy"
weight: 2

product:
  id: "rabbit"
  name: "Rabbit"
  price: "5.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "4 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "40 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m1"

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
      itemPrice: 5.00
---
