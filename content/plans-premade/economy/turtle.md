---
title: "turtle"
draft: false
category: "Economy"
weight: 3

product:
  id: "turtle"
  name: "Turtle"
  price: "7.50"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "6 GiB"

    - name: "Storage"
      type: "readonly"
      value: "60 GiB"

    - name: "nodemodel"
      type: "readonly"
      value: "m1"

    - name: "database"
      type: "readonly"
      value: 1

    - name: "snapshots"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "readonly"
      value: 10
      
    - name: "servertype"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 7.50
---
