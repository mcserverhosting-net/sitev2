---
title: "chicken"
draft: false
category: "Economy"
weight: 1

product:
  id: "chicken"
  name: "Chicken"
  price: "2.50"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "2 GiB"

    - name: "Storage"
      type: "readonly"
      value: "20 GiB" 
      
    - name: "nodemodel"
      type: "hidden"
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
      itemPrice: 2.50
---
